# Mahar-Amir-Nawaz

A static portfolio website for Amir Nawaz, highlighting Python, data analysis, statistics, and office productivity skills.

## Project overview

This repository contains a lightweight single-page portfolio built with plain HTML, CSS, and vanilla JavaScript. It is designed to showcase profile information, technical skills, service offerings, and a contact form that forwards messages through FormSubmit.

## Included files

- `extracted/index.html` — main portfolio page and sections
- `extracted/style.css` — full design system, layout, and responsiveness
- `extracted/script.js` — mobile navigation behavior
- `extracted/profile.jpg` — profile image used in the hero section
- `extracted/thanks.html` — confirmation page shown after form submission
- `Mahar Amir Nawaz.zip` — original archive bundle of the project

## Running locally

Because this is a static site, there is no package install or build step.

### Option 1: open directly

- Open `extracted/index.html` in a browser.

### Option 2: use a local web server

From the repository root, run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/extracted/` in your browser.

## Contact form

The contact form posts to FormSubmit and forwards messages to `mhramirnawaz@gmail.com`.

On the first submission, FormSubmit may send a confirmation email to the Gmail address. Completing that activation allows future submissions to be delivered normally.

## Notes

- The project is front-end only and does not require a backend.
- The mobile menu is handled with a small JavaScript interaction and CSS state toggling.
- This README reflects the current static portfolio structure in the repository.
