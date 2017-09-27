import win32com.client as wincl
speak = wincl.Dispatch("SAPI.SpVoice")
speak.Speak("Python just finsih running the script")