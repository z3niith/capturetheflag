import os

def generate_flag_file():

    flag = "https://www.youtube.com/watch?v=NTUUEU8nYfQ"


    with open("link.txt", "w") as f:
        f.write(flag)

    print("Flag file link generated: link.txt")

if __name__ == "__main__":
    generate_flag_file()
