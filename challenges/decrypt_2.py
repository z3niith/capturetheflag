def encrypt_flag(flag):
    encrypted = ''.join([chr(ord(c) + 5) if c.isalpha() else c for c in flag])
    return encrypted

if __name__ == "__main__":

    encrypted_flag = "Qfxy_Tsj"
    print("Encrypted Flag:", encrypted_flag)

    decrypted_flag = ''.join([chr(ord(c) - 5) if c.isalpha() else c for c in encrypted_flag])
    print("Decrypted Flag:", decrypted_flag)