import React from 'react';
import logo from './logo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Le 13 décembre 2019, le président de la République Démocratique du Congo a livré son premier discours sur l'État de la nation devant le parlement et le senat réunis en congrès.
        </p>
        <p>
          Plutôt que nous limiter à juger le chef de l'État sur ses promesses, nous nous devons, en tant que citoyen de la R.D.C de l'assister pour la réalisation de ses promesses car c'est la R.D.C qui gagne au final.
        </p>
        <p>
          Toutefois, étant donné que c'est nous, le peuple, qui l'avons engagé comme président, nous nous devons aussi de faire le suivi de toutes ses promesses. Comme on dit, la promesse est une dette. Le chef de l'État se doit de réaliser ses promesses.
          Le temps où nous laissons les politiciens nous faire des promesses qu'ils ne tiennent jamais est révolu.
        </p>
        <p>
          C'est pour cette raison que nous avons lancé le site web <strong>fatshimetre.com.</strong> Nous voulons permettre à tout congolais de faire un suivi en temps réel des promesses du chef de l'état.
        </p>
        <p>
          Le site web est actuellement en cours de construction et à la fin contiendra toutes les promesses du chef de l'État avec tous les détails sur leurs états respectifs.
          Le site sera basé sur ce qui a été fait pour le premier ministre du Canada, le <a
          className="App-link"
          href="https://trudeaumetre.polimeter.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trudometre
        </a>
        </p>
        <p>
          Cette initiative vous est apportée par le groupe Carpe Diem composé de:
          <ul>
            <ol><a href="https://www.didia.me" target="_blank" rel="noopener noreferrer" className="App-link">Aristote Diasonama</a></ol>
            <ol>Baudouin Lobo</ol>
            <ol>Christian Kahusu</ol>
            <ol>Dany Kabuba</ol>
            <ol>Djenny Mandambu</ol>
            <ol>Djo Mbuyi</ol>
            <ol>Erick Kabuya</ol>
            <ol>Grace Lukelwa</ol>
            <ol>Grady Tshilenge</ol>
            <ol>Glodi Zola</ol>
            <ol>Glody Mambu</ol>
            <ol>Jonathan Mpoto</ol>
            <ol>Kevin Bampembe</ol>
            <ol>Kevin Masinda</ol>
            <ol>Landry Tshieja</ol>
          </ul>
        </p>
      </header>
    </div>
  );
}

export default App;
