<img src="https://i.ibb.co/vJsFJDr/oie-png-1.png" width="206" height="206">

# Spothole - Aritificial Intelligence Powered Pothole Detection, Reporting and Management Solution

## Spothole Citizen Web/Mobile App

### Introduction

A major problem being faced by municipalities around the world is maintaining the
condition of roads be it summer, the monsoons (when it is at its worst) or any weather
condition as a matter of fact. And although it’s the responsibility of the authorities to make
sure the roads are free of damage, at times they overlook the problem, and most times don’t
even know that the problem exists. According to “Safety Resource Center”, approximately
3 Billion US Dollars are spent by motorists for repair of blown tires, busted axles, and other
damage to their vehicles ("Study: Pothole Damage Costs U.S. Drivers $3B a Year," 2016).
Over the past five years around 16 million drivers across the U.S. have suffered damage
from potholes as per an article from “American Automobile Association (AAA)”
(Giarratana, 2018).

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
| inified Report View Card (Summarized Report Details) | My Complaints |
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

