import os

def generate_flag_file():
    # Flag to be written in the file
    flag = "CTF{file_generated_flag}"

    # Create the flag file
    with open("flag.txt", "w") as f:
        f.write(flag)

    print("Flag file generated: flag.txt")

if __name__ == "__main__":
    generate_flag_file()
