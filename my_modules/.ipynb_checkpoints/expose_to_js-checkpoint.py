print('expose_to_js loaded')

import eel

@eel.expose
def my_python_function(a, b):
    if a == 7:
        print('IN: my_python_function: call javascript')
        eel.my_javascript_function(a, b)  # This calls the Javascript function;
        eel.app_1X('getResultMethod', 'From Eel all good')
    else:
        eel.app_1X('getResultMethod', a)
    print(a, b)
    
def test():
    print('test')
    
def test2():
    print('test2')
    
    
@eel.expose
def py_socket1(dataX):
    print(f'IN: py_socket1 DATA: {dataX}')
    if dataX == 'test2':
        print('in dataX')
        test2()
    