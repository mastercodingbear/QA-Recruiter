import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { KoneQTUtils } from 'app/core/koneqt.utils';
import { DashboardService } from './dashboard.service';
import { CandidateJobs } from 'app/core/assessment/assessment.type';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit, OnDestroy {

    candidateJobs: CandidateJobs;
    loading$: Observable<boolean>;

    private _unsubscribeAll: Subject<any> = new Subject<any>();
    constructor(
        private _dashboardService: DashboardService,
        private _kqUtils: KoneQTUtils
    ) { }

    /**
     * On init
     */
    ngOnInit(): void {
        this._dashboardService.candidateJobs$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((candidateJobs: CandidateJobs) => {

                this.candidateJobs = candidateJobs;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }
}
