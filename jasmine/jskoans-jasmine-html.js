JsKoansReporter = function(doc) {
  this.document = doc || document;
  this.suiteDivs = {};
  this.skippingFailedSpecs = false;
  this.skippingFailedSuites = false;
};

JsKoansReporter.prototype.createDom = function(type, attrs, childrenVarArgs) {
  var el = document.createElement(type);

  for (var i = 2; i < arguments.length; i++) {
    var child = arguments[i];

    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child));
    } else {
      if (child) { el.appendChild(child); }
    }
  }

  for (var attr in attrs) {
    if (attr == "className") {
      el[attr] = attrs[attr];
    } else {
      el.setAttribute(attr, attrs[attr]);
    }
  }

  return el;
};

JsKoansReporter.prototype.reportRunnerStarting = function(runner) {
  this.outerDiv = this.createDom('div', { className: 'jasmine_reporter show-passed' },
      this.createDom('h1', { }, "Javascript Koans"),
      this.runnerDiv = this.createDom('div', { className: 'runner running' },
        this.createDom('a', { className: 'run_spec', href: '?' }, "try again"),
        this.runnerMessageSpan = this.createDom('span', {classname: 'running'}, "Contemplating naval..."),
        this.finishedAtSpan = this.createDom('span', { className: 'finished-at' }, ""))
      );

  this.document.body.appendChild(this.outerDiv);

  var suites = runner.suites();
  for (var i = 0; i < suites.length; i++) {
    var suite = suites[i];
    var suiteDiv = this.createDom('div', { className: 'suite' },
        this.createDom('a', { className: 'run_spec', href: '?spec=' + encodeURIComponent(suite.getFullName()) }, "run"),
        this.createDom('a', { className: 'description', href: '?spec=' + encodeURIComponent(suite.getFullName()) }, "Thinking " + suite.description));
    this.suiteDivs[suite.id] = suiteDiv;
    var parentDiv = this.outerDiv;
    if (suite.parentSuite) {
      parentDiv = this.suiteDivs[suite.parentSuite.id];
    }
    parentDiv.appendChild(suiteDiv);
  }

  this.footerDiv = this.createDom('div', { className: 'banner' },
      this.createDom('div', { className: 'logo' },
        "Test runner: Jasmine",
        this.createDom('span', { className: 'version' }, runner.env.versionString()))
      );

  this.outerDiv.appendChild(this.footerDiv);

  this.startedAt = new Date();

  var self = this;
};

JsKoansReporter.prototype.reportRunnerResults = function(runner) {
  var results = runner.results();
  var className = "progress";
  this.runnerDiv.setAttribute("class", className);
  //do it twice for IE
  this.runnerDiv.setAttribute("className", className);
  var specs = runner.specs();
  var specCount = 0;
  for (var i = 0; i < specs.length; i++) {
    if (this.specFilter(specs[i])) {
      specCount++;
    }
  }
  var message = "You are " + results.passedCount + "/" + results.totalCount + " of the way to achieving enlightenment";
  this.runnerMessageSpan.replaceChild(this.createDom('span', { className: 'description', href: '?'}, message), this.runnerMessageSpan.firstChild);

};

JsKoansReporter.prototype.reportSuiteResults = function(suite) {
  var results = suite.results();
  var status = results.passed() ? 'passed' : 'failed';
  if (results.totalCount == 0 || this.skippingFailedSuites) {
    status = 'skipped';  
  }
  if (this.skippingFailedSpecs) {
    this.skippingFailedSuites = true;
  }

  this.suiteDivs[suite.id].className += " " + status;
};

JsKoansReporter.prototype.reportSpecStarting = function(spec) {
};

JsKoansReporter.prototype.reportSpecResults = function(spec) {
  var results = spec.results();
  var status = results.passed() ? 'passed' : 'failed';
  
  if (results.skipped || this.skippingFailedSpecs) {
    status = 'skipped';
  }

  var description;
  if (status === 'failed') {
    this.skippingFailedSpecs = true;

    description = "It " + spec.description + ". It is damaging your karma."
  } else {
    description = "Knowing it " + spec.description + " has expanded your awareness."
  }

  var specDiv = this.createDom('div', { className: 'spec '  + status },
      this.createDom('a', { className: 'run_spec', href: '?spec=' + encodeURIComponent(spec.getFullName()) }, "run"),
      this.createDom('a', {
        className: 'description',
        href: '?spec=' + encodeURIComponent(spec.getFullName()),
        title: spec.getFullName()
      }, description));

  var resultItems = results.getItems();
  var messagesDiv = this.createDom('div', { className: 'messages' });

  for (var i = 0; i < resultItems.length; i++) {
    var result = resultItems[i];

    if (result.type == 'expect' && result.passed && !result.passed()) {
      messagesDiv.appendChild(this.createDom('div', {className: 'resultMessage fail'}, result.message));     

      if (result.trace.stack) {
        var lines = result.trace.stack.split('\n');
        var stack = lines[0];
        for (var i = 1; i < lines.length; i++) {
          if (lines[i].search('/koans/') != -1) {
            stack += '\n' + lines[i]
          }
        }
        messagesDiv.appendChild(this.createDom('div', {className: 'stackTrace'}, stack.trim()));
      }

      break;
    }
  }
  if (messagesDiv.childNodes.length > 0) {
    specDiv.appendChild(messagesDiv);
  }

  this.suiteDivs[spec.suite.id].appendChild(specDiv);
  
};

JsKoansReporter.prototype.log = function() {
  var console = jasmine.getGlobal().console;
  if (console && console.log) console.log.apply(console, arguments);
};

JsKoansReporter.prototype.getLocation = function() {
  return this.document.location;
};

JsKoansReporter.prototype.specFilter = function(spec) {
  var paramMap = {};
  var params = this.getLocation().search.substring(1).split('&');
  for (var i = 0; i < params.length; i++) {
    var p = params[i].split('=');
    paramMap[decodeURIComponent(p[0])] = decodeURIComponent(p[1]);
  }

  if (!paramMap["spec"]) return true;
  return spec.getFullName().indexOf(paramMap["spec"]) == 0;
};
