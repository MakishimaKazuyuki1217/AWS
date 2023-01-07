import os
import sys

def lambda_handler(event, context):
    print("----------------------------")
    print("Wrote by Makishima")
    
    
    print("===[environment-variables]===")
    for key, value in os.environ.items():
        print(f'{key}: {value}')
    
    rtdir=os.environ.get("LAMBDA_RUNTIME_DIR")
    print("\n===[runtime directory:"+rtdir+"]===")
    
    print("===[LAMBDA_RUNTIME_DIR LIST]===")
    files = os.listdir(rtdir)
    for file in files:
        print(file)

    print("===[LAMBDA_RUNTIME_DIR sys.version]===")
    print(sys.version)
    
    return 0
