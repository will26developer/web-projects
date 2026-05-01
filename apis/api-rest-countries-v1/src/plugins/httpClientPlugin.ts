import { AppError } from "../errors/AppError";
import logger from "../logger/logger";

const URL =
  "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region,subregion,tld,languages,currencies";

export const httpClientPlugin = async (): Promise<any> => {
  const start = Date.now();

  try {
    logger.info("HTTP request → restcountries", { url: URL });

    const response = await fetch(URL);

    const duration = Date.now() - start;

    if (!response.ok) {
      logger.error("HTTP error → restcountries", {
        status: response.status,
        statusText: response.statusText,
        duration,
      });

      throw new AppError("Fetch countries fail", response.status);
    }

    const data = await response.json();

    logger.info("HTTP success → restcountries", {
      status: response.status,
      duration,
      size: Array.isArray(data) ? data.length : undefined,
    });

    return data;
  } catch (error) {
    const duration = Date.now() - start;

    logger.error("HTTP request failed → restcountries", {
      duration,
      error: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : undefined,
    });

    // 👇 no pierdas contexto si ya es AppError
    if (error instanceof AppError) {
      throw error;
    }

    throw new AppError("Fetch fail, please fix the problem", 500);
  }
};
