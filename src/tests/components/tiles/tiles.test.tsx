import { describe, it, expect, vi } from "vitest";
import {
  DefaultLocationTile,
  MyLocationTile,
} from "../../../components/common";
import { render } from "@testing-library/react";
import { ILocation } from "../../../types/location";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";

vi.mock("../../../api", () => ({
  useWeatherData: vi.fn().mockReturnValue({
    data: {
      data: {
        properties: {
          timeseries: [
            {
              data: {
                instant: {
                  details: {
                    air_temperature: 0,
                  },
                },
              },
            },
          ],
        },
      },
    },
  }),
}));

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("Tiles", () => {
  const mockLocation: ILocation = {
    name: "MockLocation",
    geolocation: {
      lon: 0,
      lat: 0,
    },
  };

  it("renders DefaultLocationTile component", () => {
    const { getByTestId, getByText } = render(
      <QueryClientProvider client={client}>
        <MemoryRouter>
          <DefaultLocationTile location={mockLocation} />
        </MemoryRouter>
      </QueryClientProvider>
    );

    const component = getByTestId("default-location-tile");
    expect(component).toBeInTheDocument();

    const name = getByText("MockLocation");
    expect(name).toBeInTheDocument();

    const degrees = getByText("0°C");
    expect(degrees).toBeInTheDocument();
  });

  it("renders MyLocationTile component", () => {
    const { getByTestId, getByText } = render(
      <QueryClientProvider client={client}>
        <MemoryRouter>
          <MyLocationTile />
        </MemoryRouter>
      </QueryClientProvider>
    );

    const component = getByTestId("my-location-tile");
    expect(component).toBeInTheDocument();

    const name = getByText("My location");
    expect(name).toBeInTheDocument();

    const locationInfo = getByText("Geolocation is not supported.");
    expect(locationInfo).toBeInTheDocument();
  });
});
