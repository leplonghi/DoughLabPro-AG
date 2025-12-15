import os

target = 'tsc_errors_final_8.txt'
if os.path.exists(target):
    try:
        with open(target, 'r', encoding='utf-16-le') as f:
            content = f.read()
            # print first chunk
            print(content[:2000])
    except Exception as e:
        try:
            with open(target, 'r', encoding='utf-8') as f:
                content = f.read()
                print(content[:2000])
        except Exception as e2:
            print(f"Error reading: {e2}")
