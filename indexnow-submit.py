#!/usr/bin/env python3
"""
IndexNow submission script for yourdoctorabroad.com

What this does:
  Tells Bing (and other IndexNow-participating engines like Yandex) that
  these URLs are new/updated, so they get crawled faster instead of
  waiting for a routine crawl.

Before running:
  1. Make sure 373927f10d5847fdb97feab0c7de2106.txt has been uploaded to
     the ROOT of your live site, i.e. it must be reachable at:
     https://yourdoctorabroad.com/373927f10d5847fdb97feab0c7de2106.txt
     (the file must return exactly the key as plain text - nothing else)
  2. Make sure the site is actually live/deployed with your latest changes.

How to run:
  python3 indexnow-submit.py

You only need to run this once after a batch of changes. Run it again any
time you publish new pages or make significant edits to existing ones.
"""

import json
import urllib.request

DOMAIN = "yourdoctorabroad.com"
KEY = "373927f10d5847fdb97feab0c7de2106"
KEY_LOCATION = f"https://{DOMAIN}/{KEY}.txt"

PAGES = [
    "", "about.html", "blogs.html", "book.html", "careers.html",
    "dr-tayyab-altaf.html", "free-consultation.html", "how-it-works.html", "long-term-plan.html",
    "online-doctor-florence.html", "online-doctor-france.html",
    "online-doctor-germany.html", "online-doctor-milan.html",
    "online-doctor-naples.html", "online-doctor-netherlands.html",
    "online-doctor-paris.html", "online-doctor-pisa.html",
    "online-doctor-rome.html", "privacy-policy.html", "support.html",
    "terms-and-conditions.html", "what-we-treat.html",
    "blog-emergency-numbers-in-europe.html",
    "blog-finding-care-as-an-expat.html",
    "blog-health-insurance-for-expats.html",
    "blog-how-pharmacies-work-in-italy.html",
    "blog-jet-lag-and-time-zones.html",
    "blog-managing-a-chronic-condition-overseas.html",
    "blog-mental-health-while-living-abroad.html",
    "blog-seasonal-allergies-on-the-move.html",
    "blog-traveling-with-prescriptions.html",
    "blog-vaccinations-before-you-travel.html",
    "blog-when-to-see-a-doctor-abroad.html",
]

urls = [f"https://{DOMAIN}/{p}" for p in PAGES]

payload = {
    "host": DOMAIN,
    "key": KEY,
    "keyLocation": KEY_LOCATION,
    "urlList": urls,
}

req = urllib.request.Request(
    "https://api.indexnow.org/indexnow",
    data=json.dumps(payload).encode("utf-8"),
    headers={"Content-Type": "application/json; charset=utf-8"},
    method="POST",
)

try:
    with urllib.request.urlopen(req) as resp:
        print(f"Submitted {len(urls)} URLs. Status: {resp.status}")
except urllib.error.HTTPError as e:
    print(f"Failed. Status: {e.code}")
    print(e.read().decode())
