import os

def generate_flag_file():

    flag = "https://youtu.be/NTUUEU8nYfQ"


    with open("link.txt", "w") as f:
        f.write(flag)

    print("Flag file generated: link.txt")

if __name__ == "__main__":
    generate_flag_file()
