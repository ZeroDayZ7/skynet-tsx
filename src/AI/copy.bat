@echo off
SETLOCAL EnableDelayedExpansion

REM Definiuj ścieżkę do katalogu z plikami
SET "sourceDir=./photos/"

REM Usuń plik wynikowy, jeśli istnieje
IF EXIST imports.txt DEL imports.txt

REM Pętla generująca importy dla plików od A1 (1).jpg do A1 (238).jpg
FOR /L %%i IN (1,1,238) DO (
  SET "filename=A1 (%%i).jpg"
  ECHO import image%%i from '%sourceDir%!filename!'>> imports.txt
)

ENDLOCAL
