import os

def generate_flag_file():

    flag = "01101000 01110100 01110100 01110000 01110011 00111010 00101111 00101111 01110111 01110111 01110111 00101110 01111001 01101111 01110101 01110100 01110101 01100010 01100101 00101110 01100011 01101111 01101101 00101111 01110111 01100001 01110100 01100011 01101000 00111111 01110110 00111101 01001110 01010100 01010101 01010101 01000101 01010101 00111000 01101110 01011001 01100110 01010001"


    with open("link.txt", "w") as f:
        f.write(flag)

    print("File for the flag has been generated: link.txt")

if __name__ == "__main__":
    generate_flag_file()