import sys
import json
import numpy as np
#
def read_lines():
    data = sys.stdin.readlines()
    return json.loads(data[0])

if __name__ == '__main__':
    inputs = read_lines()
    xi = np.random.rand(int(inputs['n'])) * float(inputs['std']) + float(inputs['mean'])
    print(json.dumps(xi.tolist()))
