print('expose_to_js loaded')

import eel

@eel.expose
def my_python_function(a, b):
    def test():
        print('test')
        print('IN: my_python_function: call javascript')
        eel.my_javascript_function(a, b)  # This calls the Javascript function;
        eel.app_1X('getResultMethod', 'From Eel all good')

    def test2():
        print('test2')
        eel.app_1X('getResultMethod', a)

    def caser_default():
        print('No Dice!')
        eel.app_1X('getResultMethod', "FROM: caser_default")
    
    switcher = {
        test: test,
        7: test2
    }

#     caser = switcher.get(a, lambda: caser_default)
    caser = switcher.get(a, caser_default)
    caser()
    
    
@eel.expose
def py_socket1(dataX):
#     print(f'IN: py_socket1 DATA: {dataX}')
    if dataX == 'test2':
        print('in dataX')
        test2()
    