#Creating Modals

Steps to adding a modal to your webpage:

```HTML
<!-- 1. Make sure that these are in the head: -->
<script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>


<!-- 2.1 To add to a link to your modal from your image simply add these two attributes to the image tag: -->
<img data-toggle="modal" data-target="#idOfYourModal">

<!-- 2.2 To add a button to open your modal: -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#idOfYourModal">Button Text</button>


<!-- 3.1 Write the html for your modal and put it at the bottom of your html document: -->

  <div class="modal fade" id="mobileApp" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h4 class="modal-title" id="mobileAppLabel">Mobile Development</h4>
              </div>
              <div class="modal-body">
                  <a target="_blank" href="https://github.com/Cody-Nicholson96/Mobile_Development">
                      <img class="img-responsive img_margin" src="images/mobileAppDev.png" alt="A screenshot of me coding one of my mobile applications">
                  </a>
                  <p>This repository contains all of my mobile application development projects I have created using Android Studio. You will also find a picture in each project folder that will show what the app's user interface looks like.</p>
                  <p><a target="_blank" href="https://github.com/Cody-Nicholson96/Mobile_Development">Link to my Mobile_Applications repository</a></p>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
          </div>
      </div>
  </div>
```
