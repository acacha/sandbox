<?php

namespace App;

use Acacha\Users\Traits\ExposePermissions;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Venturecraft\Revisionable\RevisionableTrait;

/**
 * Class User.
 *
 * @package App
 */
class User extends Authenticatable
{
    use Notifiable, HasRoles, HasApiTokens, ExposePermissions, RevisionableTrait;

    /**
     * Boot method.
     */
    public static function boot()
    {
        parent::boot();
    }

    /**
     * Enable revisions on create.
     *
     * @var array
     */
    protected $revisionCreationsEnabled = true;

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['can'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

}
