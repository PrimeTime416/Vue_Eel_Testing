import subprocess

def get_is_installed(binX):
    out_std = subprocess.call(['which', binX])
    if out_std == 0:
        out_std = subprocess.check_output(['which', binX])
        out_std = out_std.decode('utf-8')
        
    esptoolCheck_out = out_std
    return esptoolCheck_out 