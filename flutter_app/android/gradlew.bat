@echo off
setlocal
set SCRIPT_DIR=%~dp0
if defined JAVA_HOME (
  "%JAVA_HOME%\bin\java" -jar "%SCRIPT_DIR%gradle\wrapper\gradle-wrapper.jar" %*
) else (
  java -jar "%SCRIPT_DIR%gradle\wrapper\gradle-wrapper.jar" %*
)
