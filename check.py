import subprocess
import sys

try:
    print("Running tsc...", flush=True)
    result = subprocess.run(
        ["npx", "tsc", "--noEmit"], 
        capture_output=True, 
        text=True, 
        shell=True,
        timeout=60
    )
    print("--- STDOUT ---")
    print(result.stdout)
    print("--- STDERR ---")
    print(result.stderr)
except Exception as e:
    print(f"Error: {e}")
