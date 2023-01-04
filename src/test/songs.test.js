/**
 @jest-environment jsdom
 */
 import { render } from "@testing-library/react";
 import {screen} from '@testing-library/react'
 import userEvent from "@testing-library/user-event";
 import Songs from "../components/songs";

 describe("Testing Songs.js", () => {
        beforeEach(() => render(<Songs/>))

        test('Renders all songs', () => {
            const albums = screen.getAllByRole("button");
            expect(albums.length).toEqual(5);
        })

        test('Like button works', async () => {
            // console.log(songs)
            const button = screen.getByTestId(1)
            await userEvent.click(button)
            expect(button.style.backgroundColor).toBe("rgb(76, 175, 80)")
        })
 })
