def encrypt_flag(flag):
    encrypted = ''.join([chr(ord(c) + 3) for c in flag])
    return encrypted

if __name__ == "__main__":
    # The encrypted flag
    encrypted_flag = "FWI{fdhvdu_vkliw_fkdoohqjh}"
    print("Encrypted Flag:", encrypted_flag)

    # Decrypt by reversing the shift
    decrypted_flag = ''.join([chr(ord(c) - 3) for c in encrypted_flag])
    print("Decrypted Flag:", decrypted_flag)
