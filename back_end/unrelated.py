cmosData = 'a7 04 00 1e ef 6f df 21 fd ad f5 bd 96 ec fd bf'
xor_key = 0xAA

print(cmosData.split())
print(type(cmosData.split()))
codes = cmosData.split()
for i in range(len(codes)):
    codes[i] = '50x' + codes[i]
    print(codes)
txt=''
print(txt.center(150,'='))
mystr =''
for i in codes:
    mystr = i + ''
print(mystr)
print(codes)
for i in range(len(codes)):
    codes[i] = int(codes[i],16)
    print(codes)
print(txt.center(150,'='))
decoded_password = ''.join(chr(byte ^ xor_key) for byte in codes)

print(decoded_password)


