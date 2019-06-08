import subprocess
from subprocess import Popen, PIPE

def get_is_installed(binX):
    out_std = subprocess.call(['which', binX])
    if out_std == 0:
        out_std = subprocess.check_output(['which', binX])
        out_std = out_std.decode('utf-8')
        
    esptoolCheck_out = out_std
    return esptoolCheck_out 

def get_terminal(commandX, argX):
#     out_std = subprocess.check_output([commandX, argX])
#     Popen([commandX, '-e', 'sleep 3s'])
    Popen([commandX, '-e "ls ; sleep 10s"'])
#     if out_std == 0:
#         out_std = subprocess.check_output(['which', binX])
#         out_std = out_std.decode('utf-8')
        
#     esptoolCheck_out = out_std
#     return esptoolCheck_out 