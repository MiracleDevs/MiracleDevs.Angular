module MiracleDevs.Angular.Models
{
    export class ModelBase
    {
        private original: ModelBase;

        startTracking(): void
        {
            this.original = Object.clone(this, ["original"]);
        }

        stopTracking(): void 
        {
            this.original = null;
        }

        isDirty(): boolean 
        {
            return !Object.isEqualTo(this, this.original, ["original"]);
        }

        isTracking(): boolean
        {
            return this.original != null;
        }
    }
}