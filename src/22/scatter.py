import csv
import numpy as np
import matplotlib.pyplot as plt

with open('22-b-last-digit.csv', mode='r') as file:
    for line in file:
        numbers = list(map(int, line.strip().split(',')))  # Strip and split by comma
        

print("Numbers:", numbers)

plt.scatter(numbers[:-1], numbers[1:])
plt.xlabel('x[n]')
plt.ylabel('x[n+1]')
plt.title('Scatterplot of RNG Successive Values')
plt.show()

fft_result = np.fft.fft(numbers)
frequencies = np.fft.fftfreq(len(numbers))

# Step 3: Plot the frequency spectrum
plt.figure(figsize=(10, 6))
plt.plot(frequencies[:len(frequencies)//2], np.abs(fft_result)[:len(fft_result)//2])
plt.title('Frequency Spectrum')
plt.xlabel('Frequency')
plt.ylabel('Amplitude')
plt.grid()
plt.show()