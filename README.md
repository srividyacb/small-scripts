## small-scripts

### Install dependencies

```
npm install
```

#### Split featureCollection into different `geojson`

[`features-split.js`](https://github.com/srividyacb/small-scripts/blob/master/features-split.js)

Takes input `GEOJSON` and output multiple GEOJSON files with specified number of features.

- Input : `xx.geojson`
- number : `<number fo features the geojson should be split>`

**Run**

```
node features-split.js file.geojson <number>
```

**Output**

Series of files with specified number of features `file0.geojson, file1.geojson, file2.geojson and so on`
