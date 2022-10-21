import {PokemonList} from '../model/PokemonList';
import {HttpClient, HttpStatusCode} from '../../../request/client/HttpClient';
import {UnexpectedError} from '../../../request/model/UnexpectedError';

export class RemotePokemonList implements PokemonList {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemotePokemonList.Model>,
  ) {}

  async getPokemonAll(): Promise<PokemonList.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    });
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.unauthorized:
        throw new UnexpectedError();
      default:
        throw new UnexpectedError();
    }
  }
}

export namespace RemotePokemonList {
  export type Model = PokemonList.Model;
}
