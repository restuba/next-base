# Project Name

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Cloning the Repository](#cloning-the-repository)
- [ReactJS](#reactjs)
- [Catatan](#catatan)
- [React Core Concept](#react-core-concept)
- [API Consume (NextJS)](#api-consume-nextjs)
- [Use Effect Hooks](#use-effect-hooks)
- [Tailwind](#tailwind)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Brief description of what the project is about and its purpose.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Git](https://git-scm.com/).
- You have a [GitHub](https://github.com/) account.
- You have access to the repository you want to clone.

## Cloning the Repository

To clone a specific branch of the repository, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to clone the repository.
3. Use the following command to clone the specific branch:

   ```sh
   git clone -b <branch-name> https://github.com/restuba/next-base.git
   ```

   Replace `<branch-name>` with the name of the branch you want to clone. For example:

   ```sh
   git clone -b feature-branch https://github.com/restuba/next-base.git
   ```

4. Navigate into the cloned repository:

   ```sh
   cd next-base
   ```

## ReactJS

- Sebuah library JavaScript untuk membuat antarmuka pengguna yang interaktif.
- Bersifat un-opinionated.
- Bersifat Declarative UI library.

## Catatan

- [Functions](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Functions) dan [Arrow Functions](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Objects](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Arrays and array methods](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Destructuring](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [Template literals](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Template_literals)
- [Ternary Operators](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- [ES Modules and Import / Export Syntax](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Modules)

## React Core Concept

- Components
- Props
- State and Hooks

### Components

- JSX
- UI bisa dipecah menjadi bagian-bagian kecil yang disebut dengan component.
- Reusable.
- Component pada React pada dasarnya adalah sebuah function.

### Props

- Komunikasi antar komponen.

### State and Hooks

#### State

- Data yang berubah seiring waktu.
- Untuk menambahkan interaktivitas pada elemen, React menggunakan state dan juga Event Handler.

#### Hooks

- React memiliki serangkaian function yang disebut dengan hooks, yang memungkinkan kita menambahkan logic di dalam komponen kita.
- Salah satu hooks yang paling sering digunakan di React untuk mengelola state adalah `useState()`.
- Elemen pertama adalah nilai.
- Elemen kedua adalah function untuk mengubah nilainya.
- Bisa memberikan default value.

## API Consume (NextJS)

- Menggunakan `getServerSideProps`.
- Menggunakan client side.

## Use Effect Hooks

- Memungkinkan melakukan side effect di dalam komponen fungsional.
- Metode lifecycle (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`).

## Tailwind

- Merupakan sebuah framework CSS yang berbasis utility-first.
- Kontrol penuh.

## Usage

Instructions on how to use the project after cloning. This might include setting up the environment, running scripts, etc.

## Contributing

Guidelines for contributing to the project. This might include steps to fork the repository, create a branch, submit a pull request, etc.

## License

Information about the project's license.
