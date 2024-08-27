#!/usr/bin/env node

import { Command } from 'commander';
import path from 'path';
import { createFile, createFolder } from './fileUtils';
import { controllerTemplate } from '../templates/controller';
import { modelTemplate } from '../templates/model';
import { viewTemplate } from '../templates/view';

const program = new Command();

const templates: { [key: string]: string } = {
  controller: controllerTemplate,
  model: modelTemplate,
  view: viewTemplate,
};

program
  .version('1.0.0')
  .description('CLI tool to generate boilerplate files');

program
  .command('generate')
  .description('Generate boilerplate files')
  .option('-f, --folder <folderName>', 'Name of the folder')
  .option('-t, --types <types...>', 'Types of files to generate (controller, model, view)')
  .action((options) => {
    const { folder, types } = options;

    if (!folder) {
      console.error('Error: Folder name is required.');
      process.exit(1);
    }

    if (!types || types.length === 0) {
      console.error('Error: At least one file type must be selected.');
      process.exit(1);
    }

    const folderPath = path.join(process.cwd(), folder);

    createFolder(folderPath);

    types.forEach((fileType: string) => {
      if (!templates[fileType]) {
        console.error(`Error: Unknown file type "${fileType}".`);
        process.exit(1);
      }
      const fileName = `${fileType}.ts`;
      createFile(folderPath, fileName, templates[fileType]);
    });
  });

program.parse(process.argv);
