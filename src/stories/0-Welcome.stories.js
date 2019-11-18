import React from 'react';
import { storiesOf } from '@storybook/react';

import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import mi from "../static/mi.pdf";



pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const number= 1;
const number2= 2;
const number3= 3;
const number4= 4;
const number5= 5;
const number6= 6;
const number7= 7;
const number8= 8;
const number9= 9;
const number10= 10;
const number11= 11;

storiesOf('Micro interacties', module)
  .add('Video: Wat zijn micro interacties', () => (
<iframe title="video" width="560" height="315" src="https://www.youtube.com/embed/GKabKII2IVA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  ));

storiesOf('Micro interacties', module)
  .add('wat is een micro interactie', () => (
      <Document file={mi}>
   <Page pageNumber={number} />
    <Page pageNumber={number2} />
     <Page pageNumber={number3} />
     <Page pageNumber={number4} />
      <Page pageNumber={number5} />
       <Page pageNumber={number6} />
       <Page pageNumber={number7} />
        <Page pageNumber={number8} />
         <Page pageNumber={number9} />
         <Page pageNumber={number10} />
          <Page pageNumber={number11} />
        </Document>

  ));




  // .add('wat is een micro interactie', () => (
  //   <a href={midoc} download> Klik hier voor het gehele document </
  //
  //
  //
  // ));
