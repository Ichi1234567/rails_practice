# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

require(["require"], (require) ->
  
  Backbone = require "backbone"
  ViewIndex = Backbone.View.extend(
    events:
      "click .show": "show_click"
      "click .delete": "delete_click"
    show_click: (e) ->
      console.log("backbone click")
      #console.log arguments
      _$target = $(e.target)
      _id= _$target.parent().parent().attr("id").split("_")[1]
      $.ajax({
        url: "/posts/" + _id
        dataType: "json"
      }).done((data) ->
        #console.log arguments
        require(["hbs!posts/show"], () ->
          _html = HandlebarsTemplates['posts/show'](data.post)
          $("#post_content").html(_html)
        )
      )
      e.preventDefault()
    delete_click: (e) ->
  )
  new ViewIndex({
    el: "body"
  })
)