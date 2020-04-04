<img src="https://i.ibb.co/vJsFJDr/oie-png-1.png" width="206" height="206">

# Spothole - Artificial Intelligence Powered Pothole Detection, Reporting and Management Solution

## Spothole Citizen Web/Mobile App

This repository covers the <b>Front End Reporting Segment</b> for the <b>Capstone Project</b> for my <b>Master's in Information Sciences and Technologies</b> at <b>Rochester Institute of Technology</b>. 

### Project Committee Members: 
 * Dr. Charles Border
 * Prof. Edward Holden
 * Prof. Bryan French

### Introduction

A major problem being faced by municipalities around the world is maintaining the
condition of roads be it summer, the monsoons (when it is at its worst) or any weather
condition as a matter of fact. And although it’s the responsibility of the authorities to make
sure the roads are free of damage, at times they overlook the problem, and most times don’t
even know that the problem exists. According to “Safety Resource Center”, approximately
3 Billion US Dollars are spent by motorists for repair of blown tires, busted axles, and other
damage to their vehicles. Over the past five years around 16 million drivers across the U.S. have suffered damage
from potholes as per an article from “American Automobile Association (AAA)”


Maintaining the road condition is a challenge with constant weather changes, wear
and tear, low budgets for the municipalities. Also, not to forget keeping people informed is
a task. So, this is an app aimed at solving the challenges mentioned. A reporting system,
where the citizen can capture the scene of an area, which will be fed to a machine learning
model that will geocode, validate and track down potholes in the scene. This has been
achieved by training for object tracking on multiple images and developed using
convolutional neural networks. Users can see the damage on the roads using a
mobile application or through their browsers. A dynamic report is also  generated for the closest authority of concern which they can view and update to
create and manage work orders using their own jurisdiction-based web/mobile app-based
dashboard.

### Motivation
In articles covered by Guardian News & Media potholes took a deadly toll in 2017, claiming almost 10 lives daily. IndiaTimes stated that "Bereaved Father Mr. Dadarao" filled 600 Potholes in Mumbai in memory of son he lost in a road accident! Inshorts reported, potholes killed more people than terrorists reporting 14,926 deaths in road accidents.

When we look at the other side of the world, there is a similar situation as reported by American Automobile Association.

Keeping the roads in good condition along with tracking damages is a challenge with constant changes in weather, low budgets for the municipalities. Not to forget keeping the people informed is a task. This project was aimed at solving the challenges mentioned.

### App Preview

#### From Wire Frames to Reality! 
<kbd><img src="https://media.giphy.com/media/Q7pFE51bnytSQrbd3s/giphy.gif"/></kbd>

### Important URLs

#### Demo 
Link to App Demo: https://nirbhay.me/spothole/

#### Citizen's App Wire Frames
Link to App Wire Frames: https://nirbhay.me/spothole/WireFrames/

#### Authority App Repository 
Link to Authority App's Repository: https://github.com/nirbhayph/spothole.authority

#### Flask and Deep Learning Backend Repository 
Link to Backend Source Code: https://github.com/nirbhayph/spothole.core

#### Citizen's App Project Structure
Link to Project's Directory Structure: https://nirbhay.me/spothole/ProjectStructure/

### Feature Stack 
| Feature Name | Screen Name |
| --- | --- |
| Report a Pothole (Using Camera, WebRTC)  | Report |
| Report a Pothole (Using Media from the File System) | Report |
| Deep Learning Powered Media Validation Check | Report |
| Report Pothole Using Current Location | Report |
| Report Pothole Using Custom Location (Auto Complete Search) | Report |
| Severity Indicator (0-10) | Report |
| Custom Text Area Description Box (For Additional Comments) | Report |
| Custom Alerts (Single and Multi Actionables) | Report |
| Successful Report Submission Feedback | Report |
| Invalid Report Feedback (Powered by Deep Learning Results) | Report |
| Minified Report View Card (Summarized Report Details) | My Complaints |
| Stepper Indicator (Report Status) | My Complaints, View Report |
| Static Image based Geographic Map | View Report |
| Disabled Severity Indicator | View Report |
| Comments Section (Communication Exchange Between Citizen and Authority) | View Report |
| Custom Location Search (Auto Complete) | Route Navigation |
| Custom Error Alerts | Route Navigation, Report |
| Map Based Directions Renderer | Route Navigation |
| Map Legend Indicating Severity Levels | Route Navigation |
| Street View Renderer | Route Navigation |
| Custom Markers for Potholes Distributed by Severity | Route Navigation |
| Custom Info Window (When Clicked on Marker) | Route Navigation | 
| Map Full Screen View | Route Navigation | 
| Wrapper Function For IsLocationOnEdge (To Display Potholes Reported on the Route Chosen) | Route Navigation |
| Estimated Time with Number of Miles | Route Navigation |
| Pothole Count for the Route | Route Navigation |
| Profile Details (Avatar, Name , Email Id) | Profile |
| Citizen's Summarized Report Statistics Based on Status (Submitted, Approved, Completed) | Profile |
| Awards Section Indicator for New Users | Profile |
| Awards Section Badge for Users with at least One Report | Profile | 
| Weighted Average Function for Calculting Badge Score | Profile |
| Custom Random Background | Log In | 
| O-Auth 2.0 Sign In | Log In |
| Fixed App Bar | All Screens |
| Left Menu Drawer (App Bar) | All Screens |
| App Bar Menu Icons (App Bar - Float Right) | All Screens |
| Floating Action Button (New Report) | All Screens | 
| 404, 401 | Error Pages |

### Libraries Used
* The Application has been built using React.js
* Material Design has been used throughout the App.
* Material UI Icons have been used for Icons. 
* MUI-Treasury Componenets have been used for additional needs (Like Card View in the My Complaints Screen)
* Axios has been used for making REST Calls to the Backend.
* FilePond and Supporting Libraries have been used for File Uploading to the Backend. 
* GitHub Pages has been used for Static Deployment of the Application. 
* React Google Maps has been used for all Mapping, Direction Rendering, Geocoding and Reverse Geocoding Needs. 
* React HTML5 Camera Component has been used for WebRTC based Media Capturing for Creating New Reports.
* Google Oauth 2.0 has been used Application Wide for Authentication Purposes. 

#### Libarary Details
| Library Name | Version |
| --- | --- |
| @material-ui/core | ^4.9.5 |
| @material-ui/icons | ^4.9.1 |
| @material-ui/lab | ^4.0.0-alpha.45 |
| @mui-treasury/components | ^1.0.0 |
| @mui-treasury/styles | ^1.0.0 |
| @mui-treasury/styling | ^0.2.8 |
| @testing-library/jest-dom | ^4.2.4 |
| @testing-library/react | ^9.5.0 |
| @testing-library/user-event | ^7.2.1 |
| autosuggest-highlight | ^3.1.1 |
| axios | ^0.19.2 |
| bootstrap | ^4.4.1 |
| dateformat | ^3.0.3 |
| filepond | ^4.12.0 |
| filepond-plugin-file-validate-size | ^2.2.1 |
| filepond-plugin-file-validate-type | ^1.2.4 |
| filepond-plugin-image-exif-orientation | ^1.0.6 |
| filepond-plugin-image-preview | ^4.6.1 |
| gh-pages | ^2.2.0 |
| lodash | ^4.17.15 |
| react | ^16.13.0 |
| react-dom | ^16.13.0 |
| react-filepond | ^7.0.1 |
| react-google-maps | ^9.4.5 |
| react-html5-camera-photo | ^1.5.4 |
| react-router | ^5.1.2 |
| react-router-dom | ^5.1.2 |
| react-scripts | 3.4.0 |
| recompose | ^0.30.0 |

### Process Description
The Citizen's App has been Divided into 5 Major Sections. 

#### 1. Create New Report
  * The users can navigate to the add a new report screen either by clicking on the floating action button at the bottom right or from the drawer by pressing the hamburger icon in the app bar. 
  * Here, users have the option to start their report by uploading an existing image of a pothole they clicked by browsing through the file system or by clicking a fresh photo using the inbuilt camera. 
  * Once users have decided on the method for uploading, the image under consideration is validated by the python based deep learning model placed on the backend server to verify if the image uploaded contains one or more potholes. 
  * If the media file contains one or mpre potholes, the users are presented with an option to share more details about their report. 
  * If not, users are presented with a feedback screen for an invalid image and the option to contact support.
  * Assuming that the uploaded image is validated successfully, users are given the option to select a location (either current (presented after seeking permission)) or to enter a custom location. 
  * After which users are asked to use a progress indicator to specify how severe the reported pothole(s) is(are) according to them.    
  * Finally they are asked to give more details about their report through a required input text area componenet. 
  * Once the user has successfully submitted the report, they can now view the same using the My Complaints Screen. 

#### 2. My Complaints
  * On signing into the app with their Google Accounts, users are presented with the My Complaints Screen. 
  * Existing users who have at least one report created can manage the status of their report and add additional comments to it or reply on comments from authorities using this section of the App. 
  * Users can click on any of the reports to view the detailed description for the report and monitor any notifications or to communicate with the authority through the chat section. 
  
#### 3. Route Navigation
  * This screen presents the user with an option to enter the source and destination location. 
  * After which a map is presented to the user based on the source and destination location entered by the user. A direction route is rendered on the map for the user. 
  * It displays the route with the marked potholes on the path which were approved by the authorities. It uses Google's Maps API to build the route. 
  * Custom markers for potholes with status approved ranging on severity are presented to the user on the route if they are close to the route.
  * It determines if a pothole is assocaited with a path using the 'isLocationOnEdge' library function provided by Google Maps.
  * A legend explaining the different attributes of the map is presented to the user. 
  * Also, there is a street view renderer for the users. 
  * This screen can be used by any logged in user to monitor a route and the status for the different potholes on it and plan travel accordingly. 
  
#### 4. Profile 
  * This screen contains the basic details (avatar, name, email address of the user) 
  * It is then followed by a counter for reports with a status of either submitted, approved or completed. 
  * Based on the above counters the user is assigned with a badge score indicating their contribution to the community. 
  * This score is a weighted average score based on the counters mentioned above.  
  * This score can later be used for rewarding the user. (TBD)
  
#### 5. Sign In Screen 
  * This screen contains the option to login using Google. 
  * This uses Google's OAuth 2.0 GAPI for logging in the user. 
  * This also uses the Unsplash API for generating random backgrounds on the side. (When in desktop mode)
  * The app also uses local storage actively to maintain the session state every time in communication with GAPI. 
  * OAuth2.0 Unsplash Logout Local Storage. 
#### Note. Features associated with each screen have been mentioned in the Feature Stack Table. 

### System Level Diagram 

<img src="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/SystemDiagram/Citizen_App_System_Diagram_White_Bg.png"/>

### Citizen App's Wireframes

Please visit this link to view the detailed wireframes for the app. https://nirbhay.me/spothole/WireFrames/

### Technology Stack (Complete Frontend and Backend)

<img src="https://github.com/nirbhayph/spothole.core/blob/master/screenshots/technology_stack/spothole_stack_white_bg.png"/>

### Architectural Tiers (Complete Frontend and Backend)
<img src="https://github.com/nirbhayph/spothole.core/blob/master/screenshots/architectural_tiers/architectural_tiers.png"/>

### Instructions to Set-Up the Citizen Application
 * Follow the instructions on this page to install nodejs and npm. Once successfully done, proceed to the next steps. 
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm.

 * On your terminal. (You can use Git-Bash if you wish to) 

```
1. git clone https://github.com/nirbhayph/spothole.git
2. cd spothole
3. npm install 
4. Change the API KEY for Google Maps by creating a key from 
https://developers.google.com/maps/documentation/javascript/get-api-key. 
5. Change the ClientId for Google Oauth 
from https://developers.google.com/identity/protocols/oauth2.
6. Setup the flask and deep learning app on your machine by following the setup instructions for the backend. 
7. Setup the database according to the instructions provided in the backend application's readme document. 
8. Once your backend is working test the local apis using a tool like Postman.
9. Change the api constants in the utility folder of the citizen app's src/component directory
9. Finally, npm start
10. Enjoy using the app. Feel free to make contributions and raise Pull Requests. 
```
 * Visit http://localhost:3000 in your browser to see spothole citizen application running.

### Deploying 

The citizen's application has been hosted through GitHub pages. Refer the link: https://github.com/gitname/react-gh-pages to create a similar deployment. 

### Future Work
* Severity based Direction Renderer (User Interface Changes)
* Adding Additional Parameters to the Frontend after Implemented in the Backend. (Pothole Dimensions) 
* Navigation 
* Offline Capabilities (Camera Componenet)
* Realtime Notifications (In-App)
* Linking Social Platforms (Twitter)
* News Feed 
* Reward System 

### Note 
For developers out there, if you wish to contribute to the project, feel free to do so. Please review the future work section and create pull requests for ideas and thoughts. Once approved, we can follow up with more discussions.

### License
This project is licensed under the MIT License - see the LICENSE.md file for details

### Developer

#### Nirbhay Pherwani 
* GitHub - @nirbhayph - https://github.com/nirbhayph
* LinkedIn - https://linkedin.com/in/nirbhaypherwani
* Profile - https://nirbhay.me
* Email - pherwani37@gmail.com

### Acknowledgements and Mentions

* @reactjs - https://reactjs.org/
* @material-design-react - https://material-ui.com/
* @react-google-maps - https://www.npmjs.com/package/react-google-maps
* @google-maps-api - https://developers.google.com/maps/documentation/javascript/
* @google-oauth-gapi - https://developers.google.com/identity/protocols/oauth2
* @mui-treasury - https://mui-treasury.com/
* @axios - https://www.npmjs.com/package/axios
* @filepond - https://www.npmjs.com/package/filepond
* @dateformat - https://www.npmjs.com/package/dateformat
* @AmericanAutomobileAssociation - https://www.aaa.com/stop/
* @SafetyResourceCenter - https://www.trafficsafetystore.com/blog/the-plague-of-potholes-how-to-save-americas-roadways/
* @loadash - https://lodash.com/
* @create-react-app - https://reactjs.org/docs/create-a-new-react-app.html
* @gh-pages - https://www.npmjs.com/package/gh-pages
* @github - https://github.com
* @roshniw - https://roshniwadhwa.me
* @trello - https://trell.com
* @figma - https://figma.com
* @google-keep - https://keep.google.com
* @npmjs - https://www.npmjs.com
* @snap2html - https://www.rlvision.com/snap2html/about.php

### App Screenshots

Here are some screenshots from the citizen app. 

<a href="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/22.png"><img src="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/22.png" align="left" height="540" width="270" alt="22"></a>
<a href="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/21.png"><img src="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/21.png" align="left" height="540" width="270" alt="21"></a>
<a href="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/1.png"><img src="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/1.png" align="left" height="540" width="270" alt="1"></a>
<a href="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/2.png"><img src="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/2.png" align="left" height="540" width="270" alt="2"></a>
<a href="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/5.png"><img src="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/5.png" align="left" height="540" width="270" alt="5"></a>
<a href="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/6.png"><img src="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/6.png" align="left" height="540" width="270" alt="6"></a>
<a href="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/7.png"><img src="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/7.png" align="left" height="540" width="270" alt="7"></a>
<a href="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/8.png"><img src="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/8.png" align="left" height="540" width="270" alt="8"></a>
<a href="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/9.png"><img src="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/9.png" align="left" height="540" width="270" alt="9"></a>
<a href="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/10.png"><img src="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/10.png" align="left" height="540" width="270" alt="10"></a>
<a href="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/11.png"><img src="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/11.png" align="left" height="540" width="270" alt="11"></a>
<a href="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/12.png"><img src="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/12.png" align="left" height="540" width="270" alt="12"></a>
<a href="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/13.png"><img src="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/13.png" align="left" height="540" width="270" alt="13"></a>
<a href="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/14.png"><img src="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/14.png" align="left" height="540" width="270" alt="14"></a>
<a href="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/15.png"><img src="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/15.png" align="left" height="540" width="270" alt="15"></a>
<a href="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/16.png"><img src="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/16.png" align="left" height="540" width="270" alt="16"></a>
<a href="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/17.png"><img src="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/17.png" align="left" height="540" width="270" alt="17"></a>
<a href="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/18.png"><img src="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/18.png" align="left" height="540" width="270" alt="18"></a>
<a href="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/19.png"><img src="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/19.png" align="left" height="540" width="270" alt="19"></a>
<a href="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/20.png"><img src="https://github.com/nirbhayph/spothole/blob/develop/public/Screenshots/MobileView/20.png" align="left" height="540" width="270" alt="20"></a>
