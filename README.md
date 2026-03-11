# Drip Smart USA — Precision Irrigation Website

A user-focused precision drip irrigation website built on **Umbraco CMS** with **.NET 10**, inspired by [netafimusa.com](https://www.netafimusa.com/) with an enhanced, user-first design.

---

## 🌱 Project Overview

This site serves farmers, landscapers, greenhouse operators, and other growers with a modern, accessible, and conversion-optimized web experience. Key improvements over the reference site:

- **User-first navigation** — clear mega-menus with contextual grouping (by crop, by industry, by solution)
- **Smart hero section** — live irrigation dashboard mockup to immediately show product value
- **Grower story cards** — human-centered testimonials with quantified results
- **Interactive FAQ** — collapsible accordions with SEO-friendly content
- **Dealer finder form** — embedded search to reduce friction to the first contact point
- **Fully responsive** — mobile-first layout with a slide-in mobile nav
- **Scroll animations** — fade-in and counter animations via Intersection Observer

---

## 🗂 Project Structure

```
/
├── Views/
│   ├── home.cshtml              # Homepage view
│   ├── _ViewStart.cshtml        # Sets default layout
│   ├── _ViewImports.cshtml      # Umbraco/Razor namespaces
│   ├── Shared/
│   │   └── _Layout.cshtml       # Site-wide header, footer, nav
│   └── Partials/                # Umbraco partial views
├── wwwroot/
│   ├── css/
│   │   └── site.css             # Complete site stylesheet
│   └── js/
│       └── site.js              # Scroll animations, mobile nav, counters
├── Program.cs                   # Umbraco bootstrap
├── appsettings.json             # App configuration
└── IrrigationSite.csproj        # .NET project file
```

---

## 🚀 Getting Started

### Prerequisites
- [.NET 10 SDK](https://dotnet.microsoft.com/download)

### Run Locally

```bash
dotnet run
```

The site will start at `http://localhost:5000`.

### First-Time Setup

On first run, navigate to `http://localhost:5000/umbraco` to complete the Umbraco installation wizard:

1. Create your admin account
2. Choose database (SQLite is the default — perfect for local dev)
3. Once installed, the CMS back-office will be available at `/umbraco`

### Build

```bash
dotnet build
```

---

## 🏗 Pages & Sections

| Page / Section | Route | Description |
|---|---|---|
| Homepage | `/` | Hero, industries, how it works, benefits, crops, digital farming, stories, FAQ |
| Agriculture | `/agriculture` | Full agriculture landing page |
| Precision Irrigation | `/agriculture/precision-irrigation` | Science & benefits |
| Grower Stories | `/growers-stories` | Case studies & testimonials |
| Find a Dealer | `/find-a-dealer` | Dealer locator with search |
| Digital Farming | `/digital-farming` | GrowSphere™ OS platform |
| Resources | `/resources` | Downloads, tools, academy |
| Contact | `/contact` | Quote request form |

---

## 🎨 Design System

| Token | Value |
|---|---|
| Primary Green | `#1a7a4a` |
| Dark Green | `#0d5c36` |
| Text Dark | `#0f1c14` |
| Font | Inter (Google Fonts) |
| Border Radius | `12px` / `20px` |
| Container Width | `1240px` |

---

## 📋 Umbraco Back-Office

Access the CMS at: `http://localhost:5000/umbraco`

From the back-office you can:
- Create and edit Document Types for each page
- Manage content for all pages
- Upload media (images, PDFs)
- Configure URL routing and navigation menus

---

## 🔧 Development Notes

- The `MimeKit` vulnerability warning is a transitive Umbraco dependency — no action needed for development
- Static assets are served from `wwwroot/`
- Views use Razor syntax and are resolved by Umbraco's content routing engine
- To add a new content page, create a Document Type in the back-office, then add a matching `.cshtml` view in `/Views/`
