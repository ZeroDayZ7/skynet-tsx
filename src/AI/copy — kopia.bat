@echo off

REM Utwórz nowy plik JavaScript
echo const images = [> images.js

REM Pętla generująca wpisy do tablicy images
FOR /L %%i IN (1,1,238) DO (
  echo    image%%i,>> images.js
)

REM Dodaj zamykający nawias klamrowy
echo ];>> images.js
