## ![wizardry](https://raw.github.com/diy/wizardry/master/wizardry.png)

Wizardry is a task-based library for GraphicsMagick / ImageMagick that focuses on simplicity and getting one thing done right: processing images.

[![Travis Status](https://secure.travis-ci.org/diy/wizardry.png)](http://travis-ci.org/diy/wizardry)


### Installation
```bash
npm install wizardry
```

### Basic Usage
```javascript
var wizardry = require('wizardry');
var task = require('./path/to/your/task.json')

// Easy as one line.
wizardry(['path/to/image.png'], task, callback);
```

Wizardry requires an array of image(s) to process. It expects that they are valid file paths.

### Command line usage
```bash
wizardry -i path/to/image.png -t path/to/your/task.json
```

### Task file

A task file in wizardry is a .json file that defines each of the commands to be ran on an image. They are ran in the order listed. It also provides configuration, such as the amount of processes to run, the output directory, and which library to use.

#### Example task file
```json
{
    "commands": {
        "modulate": "115, 0, 100",
        "colorize": "7, 21, 50"
    },
    "processes": 10,
    "library": "imagemagick",
    "outputDirectory": "/foo/bar/folder"
}
```

### Testing
```bash
npm test
```