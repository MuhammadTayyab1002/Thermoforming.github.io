# Thermoforming Machine – Catheter Tip Shaping System

[![Made for Medical R&D](https://img.shields.io/badge/Made%20for-Medical%20R%26D-007bff)](https://github.com)

> **A specialized web-based HMI demo for a catheter tip thermoforming machine**  
> Developed at **Revive Medical Technologies** – used for early prototype shaping of catheters in Catheter Research & Development.

This repository contains a fully responsive, interactive website that showcases the operator interface (HMI) of a thermoforming machine. It combines **design mockups**, **actual machine GUI screenshots**, and a **scrollable carousel** to present the machine's core functionality: using heat and pressure to mold catheter tips into precise shapes.

---

## 📌 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Machine Workflow](#machine-workflow)
- [Demo](#demo)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Acknowledgments](#acknowledgments)

---

## Overview

The **Thermoforming Machine** is a specialized R&D tool that heats a catheter tip and applies pressure to form specific geometries (tapered, bullet, stepped, etc.). This web-based interface demonstrates the machine's HMI screens, including:

- Landing / startup screen
- Pre‑heating, heating, and cooling cycles
- Manual override mode
- Parameter setting panel

The project serves both as a **design reference** and a **simulation-ready UI** for training, presentations, or further integration with actual machine controllers.

---

## Features

- ✅ **Responsive, modern HMI design** – mimics industrial touchscreen panels.
- ✅ **Six core screen mockups** – Landing, Preheating, Heating, Cooling, Manual, Parameters.
- ✅ **Actual GUI image gallery** – displays real machine screenshots in a **carousel** (one image at a time) with previous/next buttons and dot indicators.
- ✅ **Editable parameter sliders** (optional extension) – temperature, heat time, cool time with live display updates.
- ✅ **Technical specifications & process description** – explains how the machine is used in catheter R&D.
- ✅ **Works on desktop, tablet, and mobile** – fluid layout and touch‑friendly carousel.
- ✅ **Keyboard navigation** – left/right arrows move through the actual image carousel.

---

## Machine Workflow

The machine follows a standard thermoforming cycle:

1. **LOAD** – Place the catheter segment into the mold cavity.
2. **PRE‑HEATING** – Ramp up to the polymer glass transition temperature.
3. **HEATING + PRESSURE** – Dwell time shapes the tip under pneumatic pressure.
4. **COOLING** – Controlled quenching sets the final form.
5. **MANUAL MODE** – Allows engineers to fine‑tune parameters during process development.

All these stages are reflected in the HMI mockups and actual GUI images.

---

## Demo

🚀 **Live demo:** https://thermoforming.github.io  

*(This repository is built as a GitHub Pages site – the root `index.html` is served automatically.)*

![Thermoforming HMI Preview](https://via.placeholder.com/800x450?text=Thermoforming+GUI+Demo)

> *Screenshots of the actual machine GUI are included in the carousel.*

---

## Project Structure

── index.html # Main HTML file
├── css/
│ └── style.css # All styles
├── carousel.js # JavaScript for the image carousel
├── README.md # This file
└── [actual GUI images] # PNG files listed below

## Technologies Used

1. **STM32** – MCU Used.
2. **Proteus** – Used for Circuit Simulation, Design and PCB Design.
3. **Nextion** – HMI.
4. **PID** – For temperature Control.
5. **HTML5** – semantic markup.
6. **CSS3** – Flexbox, Grid, custom scrollbars, media queries.
7. **JavaScript (ES6)** – carousel logic, event handling, dynamic dots, keyboard navigation.
8. **GitHub Pages** – static hosting.

## Acknowledgments

1. Developed for Revive Medical Technologies – advancing catheter prototyping.
2. Developed By Muhammad Tayyab.