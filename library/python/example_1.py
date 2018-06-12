import json
import numpy as np

if __name__ == '__main__':
    xi = np.random.rand(10)
    print(json.dumps(xi.tolist()))
