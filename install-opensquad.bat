@echo off
cd /d "C:\Users\vitor\OneDrive\Desktop\projeto"
echo 0 > temp_input.txt
echo Vitor >> temp_input.txt
echo y >> temp_input.txt
npx opensquad init < temp_input.txt
del temp_input.txt
pause
