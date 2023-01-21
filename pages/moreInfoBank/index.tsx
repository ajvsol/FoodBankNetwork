"use client";
import React, { useState } from "react";
import { useSearchContext } from "../../context/search";
import Map from "../../components/map";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import supabase from "../../components/supabaseClient";
import SearchBar from "../../components/SearchBar";
import { NavBar } from "../../components/NavBar/NavBar";
import { Button, Card, Text } from "@nextui-org/react";

export default function MoreInfoBank() {
  const [
    search,
    setSearch,
    text,
    setText,
    searchResults,
    setSearchResults,
    location,
    setLocation,
    bank,
    setBank,
    comments,
    setComments,
    setMapCode,
    mapCode,
  ]: any = useSearchContext();
  const router = useRouter();

  function goBack() {
    router.push("/find");
  }

  const mapCodeDirections = `&origin=${search}&destination=${location}`;

  function handleClick() {
    console.log(mapCode);
    setMapCode(mapCodeDirections);
  }

  return (
    <>
      <div className="p-3">
        <NavBar />
        <SearchBar />
      </div>
      <Button onClick={goBack} color="warning" auto className="ml-3">
        Go Back
      </Button>
      <Card
        variant="bordered"
        color="black"
        className="bg-black"
        key={uuidv4()}
      >
        <Card.Header>
          <Text b>{bank.name}</Text>
        </Card.Header>
        <Card.Divider />
        <Text className="ml-3 mr-3">{bank.address}</Text>
        <Card.Body>
          <p>{bank.address}</p>
          <p>{bank.phone}</p>
          <p>{bank.email}</p>
        </Card.Body>
        <Card.Divider />
        <Card.Footer></Card.Footer>
      </Card>
      <h1 className="ml-3">Comments</h1>
      <div className="ml-3">
        {comments.map((element: any) => {
          return (
            <div key={uuidv4()}>
              <p>{element.comment}</p>
              <p>{element.author}</p>
            </div>
          );
        })}
      </div>

      <div>
        <Map coord={location} origin={search} />

        <button onClick={handleClick}>Directions</button>
      </div>
    </>
  );
}
