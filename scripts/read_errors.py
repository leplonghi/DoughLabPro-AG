import sys
import os

files = ['tsc_errors_2.txt', 'tsc_errors.txt']
target = None
for f in files:
    if os.path.exists(f):
        target = f
        break

if target:
    print(f"Reading {target}...")
    try:
        with open(target, 'r', encoding='utf-16-le') as f:
            print(f.read(4000))
    except Exception as e:
        print(f"Error reading utf-16-le: {e}")
        try:
            with open(target, 'r', encoding='utf-8') as f:
                print(f.read(4000))
        except Exception as e2:
            print(f"Error reading utf-8: {e2}")
else:
    print("No error log file found.")
