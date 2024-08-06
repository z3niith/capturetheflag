def encrypt_flag(flag):
    encrypted = ''.join([chr(ord(c) + 3) for c in flag])
    return encrypted

if __name__ == "__main__":
    # The encrypted flag
    encrypted_flag = "FWH{fdhvdu_vkliw_bkdoohqjh}"
    print("Encrypted Flag:", encrypted_flag)

    # Decrypt by reversing the shift (Hint for the player)
    # decrypted_flag = ''.join([chr(ord(c) - 3) for c in encrypted_flag])
    # print("Decrypted Flag:", decrypted_flag)
