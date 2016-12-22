---
author: "David Conner"
layout: post
title:  "BootstrApp!"
date:   2016-11-22 19:50:21 -0600
categories: javascript
tags: tutorial jekyll
comments: true
permalink: /categories/:categories/:year/:month/:day/:title/
---



## A basic starter for creating performant, ‘native’ like mobile web apps.

The distinction between native and web based applications is blurring. The modern browser’s capabilities and the many [web APIs](https://developer.mozilla.org/en-US/docs/Web/API) available have quieted the biggest arguments against developing one’s application using web technologies. BootstrApp is a collection of best practices and helper functions that will help make your mobile application feel native and save you time in development. So, let’s break down the pieces.

## Metatags
Resources: [1](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html), [2](https://developers.chrome.com/multidevice/android/installtohomescreen)
In addition to our regular html boilerplate there are a few links and meta tags that you will have to include.


[Fullscreen dat app!](https://developers.google.com/web/fundamentals/native-hardware/fullscreen/)
This first group of metatags are necessary to remove the address bar when your app is added to the home page. This will only work on single page apps as navigating to another page will cause the address bar to reappear. **(confirm)**
```
<!-- Get rid of the address bar when saved to home screen
 -->
 <!-- iOS -->
<meta name="apple-mobile-web-app-capable" content="yes">
<!-- Android -->
<meta name="mobile-web-app-capable" content="yes">
```

Next you will want to specify the title for the app. This will appear with your app icon when saved to the home screen. On Android devices the application’s `<title>` element serves as the default label for the icon on the homescreen.

```
<!-- Specify a title for the app add to home -->
 <!-- iOS -->
<meta name="apple-mobile-web-app-title" content="App Name">
```

Adding an icon for the home screen can get a bit ridiculous when trying to serve all the different types that are out there. By serving one high res icon you can take care of most use cases.

```
<!-- Change app icon -->
 <!-- iOS, Android (deprecated) -->
<link rel="apple-touch-icon" href="/custom_icon.png">
<!-- Android -->
<link rel="icon" sizes="192x192" href="nice-highres.png">
```



> Use the large 192px icon format, as in `<link rel="icon" sizes="192x192" href="nice-highres.png">` for the highest quality homescreen icons. - *developer.chrome.com*


If your app calls for it you can even add a metatag which will allow you to style the status bar. By changing the content attribute on this meta tag you can change from the default to black to a translucent black. When translucent the status bar hovers over the application instead of being above it.
```
<!-- Change status bar styles -->
<meta name="apple-mobile-web-app-status-bar-style" content="translucent-black">
```


## CSS
Now that we have our html page set up we will have to add some styling to our application.

###Momentum Scrolling
When scrolling on a mobile application there is a satisfying realism to the way the content keeps going with the momentum of the scroll. In order to achieve this we will have to add the following to any elements that have scrollable content.

```
-webkit-overflow-scrolling: touch;
overflow: scroll;
```

So instead of the scroll ending the moment the user lifts their finger the content will continue with the momentum of the finger swipe.

### Make stuff the user shouldn’t select unselectable with [`user-select`](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select)
Most times you will want the user to be able to copy text in your application. Other times this may be problematic. If the user is trying to interact with part of the UI and they keep selecting nearby text instead you may want to make that text unselectable. The following css will accomplish this. Apply to any item you do not want the user to select.

```
-moz-user-select: none;
-webkit-user-select: none;
-ms-user-select: none;
user-select: none;
```

### Get Rid of Gray Tap Highlight [`user-select`](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/AdjustingtheTextSize/AdjustingtheTextSize.html#//apple_ref/doc/uid/TP40006510-SW5)
One dead giveaway that your app is not native is the transparent gray tap highlight that is applied by the browser. To remove it you can apply the following css.

```
*,
*::before,
*::after {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
```

The above CSS will remove the tap highlights on ALL elements on the screen. Now that we have taken away this affordance you will probably want to apply an alternative feedback mechanism for your users.

### Add active states to tappable elements
Giving the user immediate feedback to actions is a great way to improve perceived performance. This is what the gray tap highlight was trying to achieve. By using the `:active` pseudoclass you can still provide immediate feedback that is more inline with your brand or aesthetic.

{% highlight CSS %}
button:active {
	color: #ddd;
	font-weight: bold;
}
{% endhighlight %}

### Adding Will change to elements
Performance should always be a concern. By adding the `will-change` property you can help speed up animations the you have in your application.
```
section {
	will-change: opacity;
}
```



{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}
