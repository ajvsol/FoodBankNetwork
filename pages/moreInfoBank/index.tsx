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
  const element = bank;

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
      <div 
        id="mobile-content" 
        className="md:hidden lg:hidden md:flex-col">
        <Map coord={location} />
        <div
          id="List"
          className="
          ">
          <Card
            variant="bordered"
            key={uuidv4()}
            >
            <Card.Header>
              <Text b>{element.name}</Text>
            </Card.Header>
            <Card.Body>
              <Text>{element.address}</Text>
              <Text>{element.phone}</Text>
              <Text>{element.email}</Text>
              {/*<p>{bank.address}</p>
              <p>{bank.phone}</p>
              <p>{bank.email}</p>*/}
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Button size="sm" onClick={handleClick}>Directions</Button>
            </Card.Footer>
          </Card>
        </div>
      </div>
      <div
        id="desktop-content"
        className="hidden md:flex lg:flex flex-row justify-items-start min-h-[80vh] max-h-[72vh]  lg:visible  ">
        <Map coord={location} />
        <div
          id="List"
          className="
          min-w-[33%] max-w-[33%] overflow-auto my-3 pr-3
          ">
          <Card
            variant="bordered"
            key={uuidv4()}
            >
            <Card.Header>
              <Text b>{element.name}</Text>
            </Card.Header>
            <Card.Body>
              <Text>{element.address}</Text>
              <Text>{element.phone}</Text>
              <Text>{element.email}</Text>
              {/*<p>{bank.address}</p>
              <p>{bank.phone}</p>
              <p>{bank.email}</p>*/}
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Button size="sm" onClick={handleClick}>Directions</Button>
            </Card.Footer>
          </Card>
        </div>
      </div>
      <h1 className="ml-3 text-gray-900 text-xl p-2 dark:text-gray-300">Comments</h1>
      <div className="ml-3 text-gray-900 dark:text-gray-300">
        {comments.map((element: any) => {
          return (
            <Card
              variant="bordered"
              key={uuidv4()}
              >
              <Card.Header>
                <Text b>{element.author}</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body>
                <Text>{element.comment}</Text>
                {/*<p>{bank.address}</p>
                <p>{bank.phone}</p>
                <p>{bank.email}</p>*/}
              </Card.Body>

            </Card>
          );
        })}
      </div>
    </>
  );
}
