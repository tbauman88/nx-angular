module.exports = {
  name: 'ng-rxjs',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ng-rxjs',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
