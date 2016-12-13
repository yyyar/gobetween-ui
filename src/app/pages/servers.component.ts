import { Component } from "@angular/core";
import { ApiService } from "../services/api.service";
import { SortServerService } from "../services/sort-servers.service";

@Component({
    selector: 'page-servers',
    templateUrl: '../templates/pages/servers.component.html'
})

export class ServersComponent {

    constructor(
        private api: ApiService,
        private sorting: SortServerService
    ) {}

    servers: { [key:string]: Server} = {};

    serverSorting: ServersSorting;

    ngOnInit() {

        this.serverSorting = {
            sortBy: this.sorting.arrFiends[0],
            sortOrder: this.sorting.arrOrders[0].value
        };

        this.api.getServers().subscribe((servers) => {
            console.log(servers);
            this.servers = servers;
        });

        this.sorting.subscribe((sort: ServersSorting) => {
            this.serverSorting = sort;
        });
    }

    onClickSort(){
        this.sorting.openPopup();
    }

}