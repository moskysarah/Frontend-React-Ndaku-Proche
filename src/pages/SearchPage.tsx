import React from "react";
import { useLocation } from "react-router-dom";

const SearchPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query") || "";

  // Simulated search results for demonstration
  const results = [
    { id: 1, title: "Maison à louer de deux chambres salon, salle de bain et magasin à 400$", location: "Barumbu" },
    { id: 2, title: "Appartement à vendre à Proche", location: "Proche Centre" },
    { id: 3, title: "Terrain disponible à Ndaku", location: "Ndaku Nord" },
    {
      id: 4,
      title: "Maison à trois chambres salon, cuisine et salle de bain à 750$",
      location: "Gombe",
    },
    {
      id: 5,
      title: "Maison à trois chambres, salle à manger et salle de bain à 450$",
      location: "Ngaliema",
    },
    {
      id: 6,
      title: "Maison à deux chambres salon, salle de bain et dépôt à 450$",
      location: "Bandal",
    },
    {
      id: 7,
      title: "Maison à trois chambres salon, cuisine et salle de jeux à 350$",
      location: "Kinshasa",
    },
    {
      id: 8,
      title: "Maison à trois chambres salon, cuisine et salle de dépôt à 350$",
      location: "Kitambo",
    },
    {
      id: 9,
      title: "Maison à deux chambres salon, salle de bain et magasin à 500$",
      location: "Limete",
    },
    {
      id: 10,
      title: "Maison à une chambre salon, cuisine et salle de bain à 250$",
      location: "Lemba",
    },
    {
      id: 11,
      title: "Maison à deux chambres salon, cuisine et salle de bain à 400$",
      location: "Lingwala",
    },
    {
      id: 12,
      title: "Maison à trois chambres salon , cuisine , salle de bain et dépôt à 320$",
      location: "Matete",
    },
    {
      id: 13,
      title: "Maison à deux chambres salon, salle de bain et magasin à 150$",
      location: "Mont-Ngafula",
    },
    {
      id: 14,
      title: "Maison à quatre chambres salon, cuisine et salle de bain à 120$",
      location: "Masina",
    },
    {
      id: 15,
      title: "Maison à trois chambres salon, cuisine et salle de dépôt à 80$",
      location: "Makala",
    },
    {
      id: 16,
      title: "Maison à trois chambres salon, salle de bain et magasin à 100$",
      location: "Maluku",
    },
    {
      id: 17,
      title: "Maison à quatre chambres salon, cuisine et salle de bain à 80$",
      location: "N'sele",
    },
    {
      id: 18,
      title: "Maison à trois chambres salon, cuisine, salle de bain et dépôt à 150$",
      location: "Ndjili",
    },
    {
      id: 19,
      title: "Maison à deux chambres salon, salle de bain et magasin à 85$",
      location: "Ngaba",
    },
    {
      id: 20,
      title: "Maison à deux chambres salon, cuisine et salle de bain à 80$",
      location: "Selembao",
    },
  ];

  // Filter results based on search query (title and location)
  const filteredResults = results.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.location.toLowerCase().includes(searchQuery.toLowerCase()) // Include location in search
  );

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Résultats de recherche</h1>
      {searchQuery ? (
        <p className="mb-4">Résultats pour : <strong>{searchQuery}</strong></p>
      ) : (
        <p className="mb-4">Veuillez entrer un terme de recherche.</p>
      )}

      {filteredResults.length > 0 ? (
        <ul className="space-y-4">
          {filteredResults.map((result) => (
            <li
              key={result.id}
              className="p-4 border rounded shadow hover:shadow-lg transition-all"
            >
              <h2 className="text-lg font-semibold">{result.title}</h2>
              <p className="text-sm text-gray-600">{result.location}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">Aucun résultat trouvé pour votre recherche.</p>
      )}
    </div>
  );
};

export default SearchPage;
