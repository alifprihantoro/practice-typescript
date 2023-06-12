#!/usr/bin/env node
import chalk from "chalk";
import boxen from "boxen";

const greeting: string = chalk.white.bold("ini berhasil!");
type option ={
  padding: number;
  margin: number;
  borderStyle: any;
  borderColor: string;
  backgroundColor: string;
}

const boxenOptions: option = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
  backgroundColor: "#555555",
};
const msgBox:string = boxen(greeting,boxenOptions);

console.log(msgBox);
