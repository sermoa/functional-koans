# Functional Koans - Functional Javascript #

Based on Edgecase's fantastic 
[Ruby koans](http://github.com/edgecase/ruby_koans), the goal of the
Functional Javascript koans is to teach you Functional Javascript through
testing.

When you first run the koans, you'll be presented with a runtime error and a
stack trace indicating where the error occurred. Your goal is to make the
error go away. As you fix each error, you should learn something about the
Javascript language and functional programming in general.

These koans will be very simple, so don't overthink them! As you progress
through more koans, more and more Javascript syntax will be introduced which
will allow you to solve more complicated problems and use more advanced
techniques.


### Running the Koans from a Browser

Simply navigate to the Javascript Koans folder using a file browser, and
double click on KoansRunnner.html. 

Any browser will do, but for the best results Firefox or Chrome is
recommended. More stack trace information shows up for javascript on this
browsers.

The first error will be in koans/AboutExpects.js. Fix the first test and
refresh the browser. Rinse and repeat until all tests turn green.

The test runner used is [Jasmine](http://pivotal.github.com/jasmine/) with a
customized reports viewer.


### Running the Koans from Eclipse

These koans can also be run from within Eclipse using the
[JsTestDriver](http://code.google.com/p/js-test-driver/) unit testing
framework.

See [http://www.youtube.com/watch?v=qAoWxXPLB0Q](http://www.youtube.com/watch?v=qAoWxXPLB0Q)
for a demo.

To use Eclipse, you will need Eclipse 3.6 for 
[Javascript Web Developers](http://www.eclipse.org/downloads/packages/eclipse-ide-javascript-web-developers/heliosm4)
along with the [JsTestDriver plugin](http://code.google.com/p/js-test-driver/wiki/UsingTheEclipsePlugin)

Import the project into Eclipse 3.6 (with JsTestDriver plugin), start the
JsTestDriver, attach a browser, create a new Js Test Driver run configuration,
and Run.

Start editing src-test/AboutAssert.js, and rerunning the tests until they turn
green.

If you don't have Eclipse you can still drive JsTestDriver through Java. Before
you can run the Koans, you must capture a browser.

To capture a browser, run this:

    java -jar JsTestDriver.jar --port 42442

... then open [http://localhost:42442](http://localhost:42442) and click
"Capture this browser".

To run the Koans, run this:

    java -jar JsTestDriver.jar --reset --tests all

##### License

This software is (c) 2010 David Laing, and licensed under the MIT license (see
LICENCE for details).  Enjoy!
